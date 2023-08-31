# Linkedin-Learning-TypeScript-Essential-Training


## 3) Defining More Complex Types

  In TypeScript, type aliases are used to create a custom name for a type. 
  // Define a type alias for a complex type
  
  **Before**:
  enum ContactStatus {
    Active = "active",
    Inactive = "inactive",
    New = "new",
  }
  
  **After**:
  type ContactStatus = "active" | "inactive" | "new";

  Syntax to allow the use of multiple types for a proprietary field: 
  
**Before**:
  interface Contact {
  id: number;
  name: ContactName;
  birthDate?: Date;
  status?: ContactStatus;
}

let primaryContact: Contact = {
  id: 12345,
  name: "Jamie Johnson",
  birthDate: new Date("23/09/23"),
};

 **After**:
 type ContactBirthDate = Date | number | string;

interface Contact {
  id: number;
  name: ContactName;
  birthDate?: ContactBirthDate;
  status?: ContactStatus;
}

let primaryContact: Contact = {
  id: 12345,
  name: "Jamie Johnson",
  birthDate: "September",
};
