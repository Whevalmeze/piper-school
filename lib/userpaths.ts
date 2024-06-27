 const getPathname = (path: string) => {
    switch (path) {
      case "/users/administrator":
        return "Administrators";
      case "/users/teachers":
        return "Teachers";
      case "/users/parents":
        return "Parents";
      case "/users/students":
        return "Students";
      default:
        return '';
    }
}

export default getPathname;