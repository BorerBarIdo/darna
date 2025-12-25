import { NextRequest, NextResponse } from 'next/server'
import { deleteEvent } from '@/lib/data'

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await deleteEvent(params.id)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'שגיאה במחיקת האירוע' },
      { status: 500 }
    )
  }
}

