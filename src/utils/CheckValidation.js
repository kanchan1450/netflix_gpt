export const validateEmail = (email) =>
{
    const checkEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    if (email.trim() === "") {
        return "Email cannot be empty.";
      }
      
    if(!checkEmail) return "Invalid email format. Please enter a valid email address.";
    return null;
} 

export const validatePassword = (password) => {
    const checkPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
        if (password.trim() === "") {
            return "Password cannot be empty.";
        }
      if(!checkPassword) return "Password must be at least 8 characters long \n  It contain a lowercase letter,\n an uppercase letter,\n a number, and any other character.";
    return null;
}