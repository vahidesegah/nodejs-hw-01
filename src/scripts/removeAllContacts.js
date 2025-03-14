import {writeContacts} from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
    try {
        await writeContacts([]);
        console.log("All Contacts Deleted");
    } catch (error) {
        console.error(error);
    }
};

removeAllContacts();
