import UUID from 'react-native-uuid';

export type Contact = {
    id?: {
      value?: string | null;
    };
    name?: {
      first?: string;
      last?: string;
    };
    email?: string;
    phone?: string;
    picture?: {
      thumbnail?: string;
      large?: string;
    };
};
  

const mapContact = (contact: Contact) => {
    const {
        name,
        picture,
        phone,
        email
    } = contact;

    return {
        id: UUID.v4(),
        name: `${name?.first ?? ''} ${name?.last ?? ''}`.trim(),
        picture: picture?.large ?? '',
        phone: phone ?? '',
        email: email ?? ''
    };
};


const fetchContacts = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/?results=100&seed=fullstackio')
        const data = await response.json()
        return data.results.map(mapContact)
    } catch (error) {
        console.error(error)
    }
}

export {fetchContacts}