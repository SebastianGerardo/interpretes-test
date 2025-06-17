export interface BookingPayload {
    eventTypeId:      number;
    start:            string;
    instant?:          boolean;
    attendee:           Booker;
}

export interface Booker {
    name: string;
    email: string;
    timeZone: string;
}

export interface BookingResponse {
    id:                     number;
    uid:                    string;
    title:                  string;
    description:            string;
    hosts:                  Host[];
    status:                 string;
    start:                  Date;
    end:                    Date;
    duration:               number;
    eventTypeId:            number;
    eventType:              EventType;
    meetingUrl:             string;
    location:               string;
    absentHost:             boolean;
    createdAt:              Date;
    updatedAt:              Date;
    rating:                 null;
    icsUid:                 string;
    attendees:              Attendee[];
    bookingFieldsResponses: BookingFieldsResponses;
}

export interface Attendee {
    name:     string;
    email:    string;
    timeZone: string;
    language: string;
    absent:   boolean;
}

export interface BookingFieldsResponses {
    email: string;
    name:  string;
}

export interface EventType {
    id:   number;
    slug: string;
}

export interface Host {
    id:       number;
    name:     string;
    email:    string;
    username: string;
    timeZone: string;
}

