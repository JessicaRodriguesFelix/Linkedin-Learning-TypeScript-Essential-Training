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

Keyof operator

Keyof operator

Partial helper type
Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.

Omit <> (exclude certain properties)
Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals)

Pick<Type, Keys>

Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.

Required<Type>

Constructs a type consisting of all properties of Type set to required. The opposite of Partial.

Record<Keys, Type>
Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type

Mapped Types
