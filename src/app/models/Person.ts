export class Person {
    id: string;    
    eventCount: Int16Array;
	mostRecentPlatform: string;
	triggeredOn : Date;
	name: string;
	photo: string;
	social: Social;
	gender: string;
};

export class Social
{
    twitter: string;
    instagram: string;
	facebook: string;
}