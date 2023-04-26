export const modules = [
  {
    id: 1,
    name: 'Internet',
    questions: [
      {
        id: '1_1',
        question: 'What is DNS?',
        descriptions: [
          {
            code: false,
            label: 'What is DNS?',
            description: `The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.
            Each device connected to the Internet has a unique IP address which other machines use to find the device. DNS servers eliminate the need for humans to memorize IP addresses such as 192.168.1.1 (in IPv4), or more complex newer alphanumeric IP addresses such as 2400:cb00:2048:1::c629:d7a2 (in IPv6).`
          },
          {
            code: false,
            label: 'How does DNS work?',
            description: `The process of DNS resolution involves converting a hostname (such as www.example.com) into a computer-friendly IP address (such as 192.168.1.1). An IP address is given to each device on the Internet, and that address is necessary to find the appropriate Internet device - like a street address is used to find a particular home. When a user wants to load a webpage, a translation must occur between what a user types into their web browser (example.com) and the machine-friendly address necessary to locate the example.com webpage.
            In order to understand the process behind the DNS resolution, it’s important to learn about the different hardware components a DNS query must pass between. For the web browser, the DNS lookup occurs "behind the scenes" and requires no interaction from the user’s computer apart from the initial request.`
          },
          {
            code: true,
            label: 'Code',
            description:`
              import { useEffect, useState } from 'react';
              import { Module, Question } from '../interfaces';
              
              const useGetObjectById = ( array: (Question | Module)[], id : string): Module | Question | null => {
                const [result, setResult] = useState<Module | Question | null>(null);
              
                const getObjectById = (array: (Question | Module)[], idForSearch: string): void => {
                    for (let i = 0; i < array.length; i++) {
                      const obj = array[i];
                      if ("questions" in obj) {
                        const moduleObj = obj as Module;
                        getObjectById(moduleObj.questions, idForSearch);
                      }
                      if (obj.id === idForSearch) {
                        setResult(obj as Module | Question);
                        break;
                      }
                    }
                  }
              
                useEffect(() => {
                  getObjectById(array, id);
                }, [array, id]);
              
                return result;
              };
              
              export default useGetObjectById;
            `
          },
        ],
      },
      {
        id: '1_2',
        question: 'question 2',
        descriptions: [
          {
            code: false,
            label: 'What is DNS?',
            description: `The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.
            Each device connected to the Internet has a unique IP address which other machines use to find the device. DNS servers eliminate the need for humans to memorize IP addresses such as 192.168.1.1 (in IPv4), or more complex newer alphanumeric IP addresses such as 2400:cb00:2048:1::c629:d7a2 (in IPv6).`
          },
          {
            code: false,
            label: 'How does DNS work?',
            description: `The process of DNS resolution involves converting a hostname (such as www.example.com) into a computer-friendly IP address (such as 192.168.1.1). An IP address is given to each device on the Internet, and that address is necessary to find the appropriate Internet device - like a street address is used to find a particular home. When a user wants to load a webpage, a translation must occur between what a user types into their web browser (example.com) and the machine-friendly address necessary to locate the example.com webpage.
            In order to understand the process behind the DNS resolution, it’s important to learn about the different hardware components a DNS query must pass between. For the web browser, the DNS lookup occurs "behind the scenes" and requires no interaction from the user’s computer apart from the initial request.`
          },
          {
            code: true,
            label: 'Code',
            description:`
              import { useEffect, useState } from 'react';
              import { Module, Question } from '../interfaces';
              
              const useGetObjectById = ( array: (Question | Module)[], id : string): Module | Question | null => {
                const [result, setResult] = useState<Module | Question | null>(null);
              
                const getObjectById = (array: (Question | Module)[], idForSearch: string): void => {
                    for (let i = 0; i < array.length; i++) {
                      const obj = array[i];
                      if ("questions" in obj) {
                        const moduleObj = obj as Module;
                        getObjectById(moduleObj.questions, idForSearch);
                      }
                      if (obj.id === idForSearch) {
                        setResult(obj as Module | Question);
                        break;
                      }
                    }
                  }
              
                useEffect(() => {
                  getObjectById(array, id);
                }, [array, id]);
              
                return result;
              };
              
              export default useGetObjectById;
            `
          },
        ],
      },
      {
        id: '1_3',
        question: 'question 3',
        descriptions: [
          {
            code: false,
            label: 'What is DNS?',
            description: `The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.
            Each device connected to the Internet has a unique IP address which other machines use to find the device. DNS servers eliminate the need for humans to memorize IP addresses such as 192.168.1.1 (in IPv4), or more complex newer alphanumeric IP addresses such as 2400:cb00:2048:1::c629:d7a2 (in IPv6).`
          },
          {
            code: false,
            label: 'How does DNS work?',
            description: `The process of DNS resolution involves converting a hostname (such as www.example.com) into a computer-friendly IP address (such as 192.168.1.1). An IP address is given to each device on the Internet, and that address is necessary to find the appropriate Internet device - like a street address is used to find a particular home. When a user wants to load a webpage, a translation must occur between what a user types into their web browser (example.com) and the machine-friendly address necessary to locate the example.com webpage.
            In order to understand the process behind the DNS resolution, it’s important to learn about the different hardware components a DNS query must pass between. For the web browser, the DNS lookup occurs "behind the scenes" and requires no interaction from the user’s computer apart from the initial request.`
          },
          {
            code: true,
            label: 'Code',
            description:`
              import { useEffect, useState } from 'react';
              import { Module, Question } from '../interfaces';
              
              const useGetObjectById = ( array: (Question | Module)[], id : string): Module | Question | null => {
                const [result, setResult] = useState<Module | Question | null>(null);
              
                const getObjectById = (array: (Question | Module)[], idForSearch: string): void => {
                    for (let i = 0; i < array.length; i++) {
                      const obj = array[i];
                      if ("questions" in obj) {
                        const moduleObj = obj as Module;
                        getObjectById(moduleObj.questions, idForSearch);
                      }
                      if (obj.id === idForSearch) {
                        setResult(obj as Module | Question);
                        break;
                      }
                    }
                  }
              
                useEffect(() => {
                  getObjectById(array, id);
                }, [array, id]);
              
                return result;
              };
              
              export default useGetObjectById;
            `
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Git',
    questions: [
      {
        id: '2_1',
        question: 'question 1',
        descriptions: [
          {
            code: false,
            label: 'What is DNS?',
            description: `The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.
            Each device connected to the Internet has a unique IP address which other machines use to find the device. DNS servers eliminate the need for humans to memorize IP addresses such as 192.168.1.1 (in IPv4), or more complex newer alphanumeric IP addresses such as 2400:cb00:2048:1::c629:d7a2 (in IPv6).`
          },
          {
            code: false,
            label: 'How does DNS work?',
            description: `The process of DNS resolution involves converting a hostname (such as www.example.com) into a computer-friendly IP address (such as 192.168.1.1). An IP address is given to each device on the Internet, and that address is necessary to find the appropriate Internet device - like a street address is used to find a particular home. When a user wants to load a webpage, a translation must occur between what a user types into their web browser (example.com) and the machine-friendly address necessary to locate the example.com webpage.
            In order to understand the process behind the DNS resolution, it’s important to learn about the different hardware components a DNS query must pass between. For the web browser, the DNS lookup occurs "behind the scenes" and requires no interaction from the user’s computer apart from the initial request.`
          },
          {
            code: true,
            label: 'Code',
            description:`
              import { useEffect, useState } from 'react';
              import { Module, Question } from '../interfaces';
              
              const useGetObjectById = ( array: (Question | Module)[], id : string): Module | Question | null => {
                const [result, setResult] = useState<Module | Question | null>(null);
              
                const getObjectById = (array: (Question | Module)[], idForSearch: string): void => {
                    for (let i = 0; i < array.length; i++) {
                      const obj = array[i];
                      if ("questions" in obj) {
                        const moduleObj = obj as Module;
                        getObjectById(moduleObj.questions, idForSearch);
                      }
                      if (obj.id === idForSearch) {
                        setResult(obj as Module | Question);
                        break;
                      }
                    }
                  }
              
                useEffect(() => {
                  getObjectById(array, id);
                }, [array, id]);
              
                return result;
              };
              
              export default useGetObjectById;
            `
          },
        ],
      },
      {
        id: '2_2',
        question: 'question 2',
        descriptions: [
          {
            code: false,
            label: 'What is DNS?',
            description: `The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.
            Each device connected to the Internet has a unique IP address which other machines use to find the device. DNS servers eliminate the need for humans to memorize IP addresses such as 192.168.1.1 (in IPv4), or more complex newer alphanumeric IP addresses such as 2400:cb00:2048:1::c629:d7a2 (in IPv6).`
          },
          {
            code: false,
            label: 'How does DNS work?',
            description: `The process of DNS resolution involves converting a hostname (such as www.example.com) into a computer-friendly IP address (such as 192.168.1.1). An IP address is given to each device on the Internet, and that address is necessary to find the appropriate Internet device - like a street address is used to find a particular home. When a user wants to load a webpage, a translation must occur between what a user types into their web browser (example.com) and the machine-friendly address necessary to locate the example.com webpage.
            In order to understand the process behind the DNS resolution, it’s important to learn about the different hardware components a DNS query must pass between. For the web browser, the DNS lookup occurs "behind the scenes" and requires no interaction from the user’s computer apart from the initial request.`
          },
          {
            code: true,
            label: 'Code',
            description:`
              import { useEffect, useState } from 'react';
              import { Module, Question } from '../interfaces';
              
              const useGetObjectById = ( array: (Question | Module)[], id : string): Module | Question | null => {
                const [result, setResult] = useState<Module | Question | null>(null);
              
                const getObjectById = (array: (Question | Module)[], idForSearch: string): void => {
                    for (let i = 0; i < array.length; i++) {
                      const obj = array[i];
                      if ("questions" in obj) {
                        const moduleObj = obj as Module;
                        getObjectById(moduleObj.questions, idForSearch);
                      }
                      if (obj.id === idForSearch) {
                        setResult(obj as Module | Question);
                        break;
                      }
                    }
                  }
              
                useEffect(() => {
                  getObjectById(array, id);
                }, [array, id]);
              
                return result;
              };
              
              export default useGetObjectById;
            `
          },
        ],
      },
      {
        id: '2_3',
        question: 'question 3',
        descriptions: [
          {
            code: false,
            label: 'What is DNS?',
            description: `The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.
            Each device connected to the Internet has a unique IP address which other machines use to find the device. DNS servers eliminate the need for humans to memorize IP addresses such as 192.168.1.1 (in IPv4), or more complex newer alphanumeric IP addresses such as 2400:cb00:2048:1::c629:d7a2 (in IPv6).`
          },
          {
            code: false,
            label: 'How does DNS work?',
            description: `The process of DNS resolution involves converting a hostname (such as www.example.com) into a computer-friendly IP address (such as 192.168.1.1). An IP address is given to each device on the Internet, and that address is necessary to find the appropriate Internet device - like a street address is used to find a particular home. When a user wants to load a webpage, a translation must occur between what a user types into their web browser (example.com) and the machine-friendly address necessary to locate the example.com webpage.
            In order to understand the process behind the DNS resolution, it’s important to learn about the different hardware components a DNS query must pass between. For the web browser, the DNS lookup occurs "behind the scenes" and requires no interaction from the user’s computer apart from the initial request.`
          },
          {
            code: true,
            label: 'Code',
            description:`
              import { useEffect, useState } from 'react';
              import { Module, Question } from '../interfaces';
              
              const useGetObjectById = ( array: (Question | Module)[], id : string): Module | Question | null => {
                const [result, setResult] = useState<Module | Question | null>(null);
              
                const getObjectById = (array: (Question | Module)[], idForSearch: string): void => {
                    for (let i = 0; i < array.length; i++) {
                      const obj = array[i];
                      if ("questions" in obj) {
                        const moduleObj = obj as Module;
                        getObjectById(moduleObj.questions, idForSearch);
                      }
                      if (obj.id === idForSearch) {
                        setResult(obj as Module | Question);
                        break;
                      }
                    }
                  }
              
                useEffect(() => {
                  getObjectById(array, id);
                }, [array, id]);
              
                return result;
              };
              
              export default useGetObjectById;
            `
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'HTML',
    questions: [
      {
        id: '3_1',
        question: 'question 1',
        descriptions: [
          {
            code: false,
            label: 'What is DNS?',
            description: `The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.
            Each device connected to the Internet has a unique IP address which other machines use to find the device. DNS servers eliminate the need for humans to memorize IP addresses such as 192.168.1.1 (in IPv4), or more complex newer alphanumeric IP addresses such as 2400:cb00:2048:1::c629:d7a2 (in IPv6).`
          },
          {
            code: false,
            label: 'How does DNS work?',
            description: `The process of DNS resolution involves converting a hostname (such as www.example.com) into a computer-friendly IP address (such as 192.168.1.1). An IP address is given to each device on the Internet, and that address is necessary to find the appropriate Internet device - like a street address is used to find a particular home. When a user wants to load a webpage, a translation must occur between what a user types into their web browser (example.com) and the machine-friendly address necessary to locate the example.com webpage.
            In order to understand the process behind the DNS resolution, it’s important to learn about the different hardware components a DNS query must pass between. For the web browser, the DNS lookup occurs "behind the scenes" and requires no interaction from the user’s computer apart from the initial request.`
          },
          {
            code: true,
            label: 'Code',
            description:`
              import { useEffect, useState } from 'react';
              import { Module, Question } from '../interfaces';
              
              const useGetObjectById = ( array: (Question | Module)[], id : string): Module | Question | null => {
                const [result, setResult] = useState<Module | Question | null>(null);
              
                const getObjectById = (array: (Question | Module)[], idForSearch: string): void => {
                    for (let i = 0; i < array.length; i++) {
                      const obj = array[i];
                      if ("questions" in obj) {
                        const moduleObj = obj as Module;
                        getObjectById(moduleObj.questions, idForSearch);
                      }
                      if (obj.id === idForSearch) {
                        setResult(obj as Module | Question);
                        break;
                      }
                    }
                  }
              
                useEffect(() => {
                  getObjectById(array, id);
                }, [array, id]);
              
                return result;
              };
              
              export default useGetObjectById;
            `
          },
        ],
      },
      {
        id: '3_2',
        question: 'question 2',
        descriptions: [
          {
            code: false,
            label: 'What is DNS?',
            description: `The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.
            Each device connected to the Internet has a unique IP address which other machines use to find the device. DNS servers eliminate the need for humans to memorize IP addresses such as 192.168.1.1 (in IPv4), or more complex newer alphanumeric IP addresses such as 2400:cb00:2048:1::c629:d7a2 (in IPv6).`
          },
          {
            code: false,
            label: 'How does DNS work?',
            description: `The process of DNS resolution involves converting a hostname (such as www.example.com) into a computer-friendly IP address (such as 192.168.1.1). An IP address is given to each device on the Internet, and that address is necessary to find the appropriate Internet device - like a street address is used to find a particular home. When a user wants to load a webpage, a translation must occur between what a user types into their web browser (example.com) and the machine-friendly address necessary to locate the example.com webpage.
            In order to understand the process behind the DNS resolution, it’s important to learn about the different hardware components a DNS query must pass between. For the web browser, the DNS lookup occurs "behind the scenes" and requires no interaction from the user’s computer apart from the initial request.`
          },
          {
            code: true,
            label: 'Code',
            description:`
              import { useEffect, useState } from 'react';
              import { Module, Question } from '../interfaces';
              
              const useGetObjectById = ( array: (Question | Module)[], id : string): Module | Question | null => {
                const [result, setResult] = useState<Module | Question | null>(null);
              
                const getObjectById = (array: (Question | Module)[], idForSearch: string): void => {
                    for (let i = 0; i < array.length; i++) {
                      const obj = array[i];
                      if ("questions" in obj) {
                        const moduleObj = obj as Module;
                        getObjectById(moduleObj.questions, idForSearch);
                      }
                      if (obj.id === idForSearch) {
                        setResult(obj as Module | Question);
                        break;
                      }
                    }
                  }
              
                useEffect(() => {
                  getObjectById(array, id);
                }, [array, id]);
              
                return result;
              };
              
              export default useGetObjectById;
            `
          },
        ],
      },
      {
        id: '3_3',
        question: 'question 3',
        descriptions: [
          {
            code: false,
            label: 'What is DNS?',
            description: `The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.
            Each device connected to the Internet has a unique IP address which other machines use to find the device. DNS servers eliminate the need for humans to memorize IP addresses such as 192.168.1.1 (in IPv4), or more complex newer alphanumeric IP addresses such as 2400:cb00:2048:1::c629:d7a2 (in IPv6).`
          },
          {
            code: false,
            label: 'How does DNS work?',
            description: `The process of DNS resolution involves converting a hostname (such as www.example.com) into a computer-friendly IP address (such as 192.168.1.1). An IP address is given to each device on the Internet, and that address is necessary to find the appropriate Internet device - like a street address is used to find a particular home. When a user wants to load a webpage, a translation must occur between what a user types into their web browser (example.com) and the machine-friendly address necessary to locate the example.com webpage.
            In order to understand the process behind the DNS resolution, it’s important to learn about the different hardware components a DNS query must pass between. For the web browser, the DNS lookup occurs "behind the scenes" and requires no interaction from the user’s computer apart from the initial request.`
          },
          {
            code: true,
            label: 'Code',
            description:`
              import { useEffect, useState } from 'react';
              import { Module, Question } from '../interfaces';
              
              const useGetObjectById = ( array: (Question | Module)[], id : string): Module | Question | null => {
                const [result, setResult] = useState<Module | Question | null>(null);
              
                const getObjectById = (array: (Question | Module)[], idForSearch: string): void => {
                    for (let i = 0; i < array.length; i++) {
                      const obj = array[i];
                      if ("questions" in obj) {
                        const moduleObj = obj as Module;
                        getObjectById(moduleObj.questions, idForSearch);
                      }
                      if (obj.id === idForSearch) {
                        setResult(obj as Module | Question);
                        break;
                      }
                    }
                  }
              
                useEffect(() => {
                  getObjectById(array, id);
                }, [array, id]);
              
                return result;
              };
              
              export default useGetObjectById;
            `
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'CSS',
    questions: [
      {
        id: '4_1',
        question: 'question 1',
        descriptions: [
          {
            code: false,
            label: 'What is DNS?',
            description: `The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.
            Each device connected to the Internet has a unique IP address which other machines use to find the device. DNS servers eliminate the need for humans to memorize IP addresses such as 192.168.1.1 (in IPv4), or more complex newer alphanumeric IP addresses such as 2400:cb00:2048:1::c629:d7a2 (in IPv6).`
          },
          {
            code: false,
            label: 'How does DNS work?',
            description: `The process of DNS resolution involves converting a hostname (such as www.example.com) into a computer-friendly IP address (such as 192.168.1.1). An IP address is given to each device on the Internet, and that address is necessary to find the appropriate Internet device - like a street address is used to find a particular home. When a user wants to load a webpage, a translation must occur between what a user types into their web browser (example.com) and the machine-friendly address necessary to locate the example.com webpage.
            In order to understand the process behind the DNS resolution, it’s important to learn about the different hardware components a DNS query must pass between. For the web browser, the DNS lookup occurs "behind the scenes" and requires no interaction from the user’s computer apart from the initial request.`
          },
          {
            code: true,
            label: 'Code',
            description:`
              import { useEffect, useState } from 'react';
              import { Module, Question } from '../interfaces';
              
              const useGetObjectById = ( array: (Question | Module)[], id : string): Module | Question | null => {
                const [result, setResult] = useState<Module | Question | null>(null);
              
                const getObjectById = (array: (Question | Module)[], idForSearch: string): void => {
                    for (let i = 0; i < array.length; i++) {
                      const obj = array[i];
                      if ("questions" in obj) {
                        const moduleObj = obj as Module;
                        getObjectById(moduleObj.questions, idForSearch);
                      }
                      if (obj.id === idForSearch) {
                        setResult(obj as Module | Question);
                        break;
                      }
                    }
                  }
              
                useEffect(() => {
                  getObjectById(array, id);
                }, [array, id]);
              
                return result;
              };
              
              export default useGetObjectById;
            `
          },
        ],
      },
      {
        id: '4_2',
        question: 'question 2',
        descriptions: [
          {
            code: false,
            label: 'What is DNS?',
            description: `The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.
            Each device connected to the Internet has a unique IP address which other machines use to find the device. DNS servers eliminate the need for humans to memorize IP addresses such as 192.168.1.1 (in IPv4), or more complex newer alphanumeric IP addresses such as 2400:cb00:2048:1::c629:d7a2 (in IPv6).`
          },
          {
            code: false,
            label: 'How does DNS work?',
            description: `The process of DNS resolution involves converting a hostname (such as www.example.com) into a computer-friendly IP address (such as 192.168.1.1). An IP address is given to each device on the Internet, and that address is necessary to find the appropriate Internet device - like a street address is used to find a particular home. When a user wants to load a webpage, a translation must occur between what a user types into their web browser (example.com) and the machine-friendly address necessary to locate the example.com webpage.
            In order to understand the process behind the DNS resolution, it’s important to learn about the different hardware components a DNS query must pass between. For the web browser, the DNS lookup occurs "behind the scenes" and requires no interaction from the user’s computer apart from the initial request.`
          },
          {
            code: true,
            label: 'Code',
            description:`
              import { useEffect, useState } from 'react';
              import { Module, Question } from '../interfaces';
              
              const useGetObjectById = ( array: (Question | Module)[], id : string): Module | Question | null => {
                const [result, setResult] = useState<Module | Question | null>(null);
              
                const getObjectById = (array: (Question | Module)[], idForSearch: string): void => {
                    for (let i = 0; i < array.length; i++) {
                      const obj = array[i];
                      if ("questions" in obj) {
                        const moduleObj = obj as Module;
                        getObjectById(moduleObj.questions, idForSearch);
                      }
                      if (obj.id === idForSearch) {
                        setResult(obj as Module | Question);
                        break;
                      }
                    }
                  }
              
                useEffect(() => {
                  getObjectById(array, id);
                }, [array, id]);
              
                return result;
              };
              
              export default useGetObjectById;
            `
          },
        ],
      },
      {
        id: '4_3',
        question: 'question 3',
        descriptions: [
          {
            code: false,
            label: 'What is DNS?',
            description: `The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.
            Each device connected to the Internet has a unique IP address which other machines use to find the device. DNS servers eliminate the need for humans to memorize IP addresses such as 192.168.1.1 (in IPv4), or more complex newer alphanumeric IP addresses such as 2400:cb00:2048:1::c629:d7a2 (in IPv6).`
          },
          {
            code: false,
            label: 'How does DNS work?',
            description: `The process of DNS resolution involves converting a hostname (such as www.example.com) into a computer-friendly IP address (such as 192.168.1.1). An IP address is given to each device on the Internet, and that address is necessary to find the appropriate Internet device - like a street address is used to find a particular home. When a user wants to load a webpage, a translation must occur between what a user types into their web browser (example.com) and the machine-friendly address necessary to locate the example.com webpage.
            In order to understand the process behind the DNS resolution, it’s important to learn about the different hardware components a DNS query must pass between. For the web browser, the DNS lookup occurs "behind the scenes" and requires no interaction from the user’s computer apart from the initial request.`
          },
          {
            code: true,
            label: 'Code',
            description:`
              import { useEffect, useState } from 'react';
              import { Module, Question } from '../interfaces';
              
              const useGetObjectById = ( array: (Question | Module)[], id : string): Module | Question | null => {
                const [result, setResult] = useState<Module | Question | null>(null);
              
                const getObjectById = (array: (Question | Module)[], idForSearch: string): void => {
                    for (let i = 0; i < array.length; i++) {
                      const obj = array[i];
                      if ("questions" in obj) {
                        const moduleObj = obj as Module;
                        getObjectById(moduleObj.questions, idForSearch);
                      }
                      if (obj.id === idForSearch) {
                        setResult(obj as Module | Question);
                        break;
                      }
                    }
                  }
              
                useEffect(() => {
                  getObjectById(array, id);
                }, [array, id]);
              
                return result;
              };
              
              export default useGetObjectById;
            `
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'Princeples',
    questions: [
      {
        id: '5_1',
        question: 'question 1',
        descriptions: [],
      },
      {
        id: '5_2',
        question: 'question 2',
        descriptions: [],
      },
      {
        id: '5_3',
        question: 'question 3',
        descriptions: [],
      },
    ],
  },
  {
    id: 6,
    name: 'ES5+, JavaScript',
    questions: [
      {
        id: '6_1',
        question: 'question 1',
        descriptions: [],
      },
      {
        id: '6_2',
        question: 'question 2',
        descriptions: [],
      },
      {
        id: '6_3',
        question: 'question 3',
        descriptions: [],
      },
    ],
  },
  {
    id: 7,
    name: 'Webpack, Babel',
    questions: [
      {
        id: '7_1',
        question: 'question 1',
        descriptions: [],
      },
      {
        id: '7_2',
        question: 'question 2',
        descriptions: [],
      },
      {
        id: '7_3',
        question: 'question 3',
        descriptions: [],
      },
    ],
  },
  {
    id: 8,
    name: 'Configuration project',
    questions: [
      {
        id: '8_1',
        question: 'question 1',
        descriptions: [],
      },
      {
        id: '8_2',
        question: 'question 2',
        descriptions: [],
      },
      {
        id: '8_3',
        question: 'question 3',
        descriptions: [],
      },
    ],
  },
  {
    id: 9,
    name: 'React JS',
    questions: [
      {
        id: '9_1',
        question: 'question 1',
        descriptions: [],
      },
      {
        id: '9_2',
        question: 'question 2',
        descriptions: [],
      },
      {
        id: '9_3',
        question: 'question 3',
        descriptions: [],
      },
    ],
  },
  {
    id: 10,
    name: 'Testing',
    questions: [
      {
        id: '10_1',
        question: 'question 1',
        descriptions: [],
      },
      {
        id: '10_2',
        question: 'question 2',
        descriptions: [],
      },
      {
        id: '10_3',
        question: 'question 3',
        descriptions: [],
      },
    ],
  },
  {
    id: 11,
    name: 'Metodologies',
    questions: [
      {
        id: '11_1',
        question: 'question 1',
        descriptions: [],
      },
      {
        id: '11_2',
        question: 'question 2',
        descriptions: [],
      },
      {
        id: '11_3',
        question: 'question 3',
        descriptions: [],
      },
    ],
  },
  {
    id: 12,
    name: 'Practical  part',
    questions: [
      {
        id: '12_1',
        question: 'question 1',
        descriptions: [],
      },
      {
        id: '12_2',
        question: 'question 2',
        descriptions: [],
      },
      {
        id: '12_3',
        question: 'question 3',
        descriptions: [],
      },
    ],
  },
];
