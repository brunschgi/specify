import path from 'node:path';
import process from 'node:process';
import dotenv from 'dotenv';

dotenv.config({
    path: path.resolve(process.cwd(), '.env.specify-cli'),
});

export default {
    "version": "2",
    "repository": "@frontifyapp/Fondue",
    "personalAccessToken": process.env.SPECIFY_TOKEN,
    "rules": [
        {
            "name": "CSS Custom Properties",
            "parsers": [
                {
                    "name": "change-case",
                    "options": {
                        "change": "names",
                        "toCase": "kebabCase"
                    }
                },
                {
                    "name": "change-case",
                    "options": {
                        "change": "modes",
                        "toCase": "kebabCase"
                    }
                },
                {
                    "name": "convert-color",
                    "options": {
                        "toFormat": "hsl"
                    }
                },
                {
                    "name": "to-css-custom-properties",
                    "output": {
                        "type": "file",
                        "filePath": "tokens.css"
                    }
                }
            ]
        },
        {
            "name": "SDTF",
            "parsers": [
                {
                    "name": "change-case",
                    "options": {
                        "change": "names",
                        "toCase": "kebabCase"
                    }
                },
                {
                    "name": "change-case",
                    "options": {
                        "change": "modes",
                        "toCase": "kebabCase"
                    }
                },
                {
                    "name": "convert-color",
                    "options": {
                        "toFormat": "hsl"
                    }
                },
                {
                    "name": "to-sdtf",
                    "output": {
                        "type": "file",
                        "filePath": "tokens.json"
                    }
                }
            ]
        }
    ]
};

