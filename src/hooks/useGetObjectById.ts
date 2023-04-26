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
