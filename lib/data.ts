import fs from 'fs'
import path from 'path'

export interface Event {
  id: string
  title: string
  description: string
  date: string
  time?: string
  location?: string
  image?: string
  createdAt: string
}

const dataDir = path.join(process.cwd(), 'data')
const eventsFile = path.join(dataDir, 'events.json')

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

// Initialize events file if it doesn't exist
if (!fs.existsSync(eventsFile)) {
  fs.writeFileSync(eventsFile, JSON.stringify([], null, 2))
}

export async function getEvents(): Promise<Event[]> {
  try {
    const fileContents = fs.readFileSync(eventsFile, 'utf8')
    const events = JSON.parse(fileContents) as Event[]
    return events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error reading events:', error)
    return []
  }
}

export async function saveEvent(event: Event): Promise<void> {
  try {
    const events = await getEvents()
    const existingIndex = events.findIndex(e => e.id === event.id)
    
    if (existingIndex >= 0) {
      events[existingIndex] = event
    } else {
      events.push(event)
    }
    
    fs.writeFileSync(eventsFile, JSON.stringify(events, null, 2))
  } catch (error) {
    console.error('Error saving event:', error)
    throw error
  }
}

export async function deleteEvent(id: string): Promise<void> {
  try {
    const events = await getEvents()
    const filtered = events.filter(e => e.id !== id)
    fs.writeFileSync(eventsFile, JSON.stringify(filtered, null, 2))
  } catch (error) {
    console.error('Error deleting event:', error)
    throw error
  }
}

