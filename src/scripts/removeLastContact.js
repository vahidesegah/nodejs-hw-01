import {readContacts} from "../utils/readContacts.js";
import {writeContacts} from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    try {
        const contacts = await readContacts();
        if (contacts.length > 0) {
        contacts.pop();
        await writeContacts(contacts);
        console.log("Tha Last One Removed");
        } else {
            console.log("No More Contacts Left");
        }

    } catch (error) {
        console.error(error);
    }
};

removeLastContact();
