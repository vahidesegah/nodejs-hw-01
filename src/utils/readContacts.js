import fs from "fs/promises";
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB,"utf-8");
        const jsonData = JSON.parse(data);
        return jsonData;
    }
        catch (error) {
            console.error(error);
        }
    };



