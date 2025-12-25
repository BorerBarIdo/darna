import { NextRequest, NextResponse } from 'next/server'
import { saveEvent, getEvents } from '@/lib/data'
import { Event } from '@/lib/data'

export async function GET() {
  try {
    const events = await getEvents()
    return NextResponse.json(events)
  } catch (error) {
    return NextResponse.json(
      { error: 'שגיאה בטעינת האירועים' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const event: Event = await request.json()
    await saveEvent(event)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'שגיאה בשמירת האירוע' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const event: Event = await request.json()
    await saveEvent(event)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'שגיאה בעדכון האירוע' },
      { status: 500 }
    )
  }
}

