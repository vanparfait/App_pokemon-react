  export const formatDate = (date: Date = new Date()): string => {
    // Vérifiez si date est déjà une instance de Date, sinon, convertissez-la
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
    return `${date.getDate()}/ ${date.getMonth() + 1}/ ${date.getFullYear()}`;
  };

 // export const formatDate = (date: any = new Date()): string => {
    
  
    // const day = date.getDate().toString().padStart(2, '0');
    // const month = (date.getMonth() + 1).toString().padStart(2, '0');
    // const year = date.getFullYear().toString();
  
    // return `${day}/${month}/${year}`;
   // return `${date.getDate()}/ ${date.getMonth() + 1}/ ${date.getFullYear()}`;
 // };
  