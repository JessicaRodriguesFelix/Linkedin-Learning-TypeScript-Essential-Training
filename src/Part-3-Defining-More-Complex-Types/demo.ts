// // type ContactName = string;

// // enum ContactStatus {
// //   Active = "active",
// //   Inactive = "inactive",
// //   New = "new",
// // }

// // type ContactFields = keyof Contact;

// // type ContactBirthDate = Date | number | string;

// // interface Contact {
// //   id: number;
// //   name: ContactName;
// //   birthDate?: ContactBirthDate;
// //   status?: ContactStatus;
// // }

// // interface Address {
// //   line1: string;
// //   line2: string;
// //   province: string;
// //   region: string;
// //   postalCode: string;
// // }

// // type AddressableContact = Contact & Address;

// // function getBirthDate(contact: Contact) {
// //   if (typeof contact.birthDate === "number") {
// //     return new Date(contact.birthDate);
// //   } else if (typeof contact.birthDate === "string") {
// //     return Date.parse(contact.birthDate);
// //   } else {
// //     return contact.birthDate;
// //   }
// // }

// // let primaryContact: Contact = {
// //   id: 12345,
// //   name: "Jamie Johnson",
// //   birthDate: "September",
// // };

// // let test: AddressableContact = {
// //   id: 2,
// //   name: "tes",
// //   line1: "tes",
// //   line2: "tes",
// //   province: "tes",
// //   region: "tes",
// //   postalCode: "tes",
// // };

// // const testKey: ContactFields = "birthDate";

// // // function getValue<T>(source: T, propertyName: keyof Contact) {
// // //   return source[propertyName];
// // // }
// // function getValue<T>(source: T, propertyName: keyof T) {
// //   return source[propertyName];
// // }

// // console.log(getBirthDate(primaryContact));

// type ContactName = string;
// type ContactStatus = "active" | "inactive" | "new";
// type ContactBirthDate = Date | number | string;

// interface Address {
//   line1: string;
//   line2: string;
//   province: string;
//   region: string;
//   postalCode: string;
// }

// interface Contact {
//   id: number;
//   name: ContactName;
//   birthDate?: ContactBirthDate;
//   status?: ContactStatus;
//   addressStreet?: Address;
// }

// type Awesome = Contact["addressStreet"]["postalCode"];

// function toContact(nameOrContact: string | Contact): Contact {
//   if (typeof nameOrContact === "object") {
//     return {
//       id: nameOrContact.id,
//       name: nameOrContact.name,
//       status: nameOrContact.status,
//     };
//   } else {
//     return {
//       id: 0,
//       name: nameOrContact,
//       status: "active",
//     };
//   }
// }

// const myType = { min: 1, max: 200 };

// function save(source: typeof myType) {}
