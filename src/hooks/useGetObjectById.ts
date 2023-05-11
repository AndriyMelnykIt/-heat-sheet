import { useEffect, useState } from 'react';
import { Module, Question } from '../interfaces';

const useGetObjectById = ( array: (Question | Module)[], moduleId : string ,id : string): Question | null => {
  const [result, setResult] = useState<Question | null>(null);
  
  useEffect(() => {
    getObjectById(array, moduleId, id);
  }, [array, moduleId, id]);

  console.log('useGetObjectById')
debugger
  const getObjectById = (array: (Question | Module)[], moduleIdForSearch: string, idForSearch: string): void => {
    for (let i = 0; i < array.length; i++) {
      const obj = array[i];
      if ("questions" in obj && obj.id === moduleIdForSearch) {
        const moduleObj = obj as Module;
        getObjectById(moduleObj.questions, moduleIdForSearch, idForSearch);
      }
      if (obj.id === idForSearch) {          
        setResult(obj as Question);
        break;
      }
      if (result !== null) {
        break;
      }
    }
  }

  return result;
};

export default useGetObjectById;
