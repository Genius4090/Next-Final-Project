// components/TimeFormatter.ts
export const TimeFormatter = (date: string): string => {
    const match = date.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/)
    if (!match) return "Invalid date"
  
    const [, y, m, d, h, min] = match
    return `${d}.${m}.${y} ${h}:${min}`
  }