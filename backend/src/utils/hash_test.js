// arquivo para testar se o hash do banco tá batendo com a senha em plaintext

import bcrypt from "bcrypt";

const hash = "$2b$10$y6VFI0u3rl1B23.BcbOSnOKul7PEvrnq/dIMfGk4hFqoZnY2O9oNC";
const valid = await bcrypt.compare("toor", hash);
console.log(valid);