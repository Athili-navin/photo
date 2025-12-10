
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  venue: string;
  needsAlbum: string; // 'Yes' | 'No'
  isMultiDay: string; // 'Yes' | 'No'
  numDays: string;
  attendees: string;
}
