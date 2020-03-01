export type PostArrType = {
    text: string,
    name: string,
    like: number,
    id: number
}
export type ContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string,
}
export type PhotosType =  {
    small: string | null,
    large: string | null,
}
export type ProfileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    aboutMe: string,
    contacts: ContactsType
    photos: PhotosType
}
export type HumansType = {
    id: number,
    name: string,
    status: string,
    photos: PhotosType
}