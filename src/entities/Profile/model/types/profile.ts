import { Country, Currency } from 'shared/const/common';

export interface Profile {
    first: string;
    lastname: string;
    age: number;
    currency: Currency;
    country: Country;
    city: string;
    username: string;
    avatar: string;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}

// https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fsearch%3Fq%3Davatars&psig=AOvVaw3FPdpud-X3alVWaz5-BZNi&ust=1680690513136000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLjPuJmCkP4CFQAAAAAdAAAAABAE'
