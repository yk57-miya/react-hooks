import React, { useContext } from 'react';
import { UserContext, HobbyContext } from '../pages/context';

const ContextC = () => {
  //useContextの引数に、UserContextやHobbyContextを渡すことによって、
  //AppコンポーネントでProviderに渡したvalueの値を変数に代入することが出来る
  const user = useContext(UserContext);
  const hobby = useContext(HobbyContext);
  return (
    <p>
      {user.name}
      {user.age}歳: 趣味は{hobby}です。
    </p>
  );
};

export default ContextC;
