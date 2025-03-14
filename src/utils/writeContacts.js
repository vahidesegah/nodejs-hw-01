import fs from "fs/promises";
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
    try {
        const dataToWrite = JSON.stringify(updatedContacts);
        await fs.writeFile(PATH_DB, dataToWrite);
        return dataToWrite;
    }
    catch (error) {
        console.error(error);

    }
};
