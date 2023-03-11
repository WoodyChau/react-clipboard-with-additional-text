在網路上分享資訊是習以為常的行為，不過有時候我們可能會遇到一個問題，我們的內容很容易被人抄襲或者轉載，這時候我們就需要一些保障。例如，我們希望在抄襲我們內容的人複製時能夠加上出處和版權信息，這樣就可以保護我們的知識產權。

在 React 中，我們可以使用一個自定義的 Hook，讓我們可以很方便地在網頁中實現複製內容到剪貼簿並加上額外文字的功能。

Sharing information on the internet is a common practice, but sometimes we may encounter a problem where our content is easily copied or reposted. In this case, we need some protection. For example, we want people who copy our content to add source and copyright information, so that we can protect our intellectual property.

In React, we can use a custom Hook to easily implement the functionality of copying content to the clipboard and adding extra text in the web page.

```
import React, { useEffect } from 'react';

const useCopy = (statement) => {
  useEffect(() => {
    const copyHandler = (event) => {
      const selected = window.getSelection().toString();
      event.clipboardData.setData('text/plain', `${selected}\n\n${statement}`);
      event.preventDefault();
    };
    document.addEventListener('copy', copyHandler);
    return () => {
      document.removeEventListener('copy', copyHandler);
    };
  }, [statement]);
};

const CopyWithStatement = ({ statement, children }) => {
  useCopy(statement);
  return <>{children}</>;
};

export default CopyWithStatement;
```
只需要將需要複製的內容作為子組件傳遞給 CopyWithStatement，並在 statement 中傳遞額外的文字即可。
Simply pass the content to be copied as a child component to CopyWithStatement, and pass the additional text in statement.

```
import React from 'react'
import CopyWithStatement from './CopyWithStatement'

function App() {
  return (
    <CopyWithStatement statement="Read more at https://woodychau.hk © 2023 Woody Chau">
      Hello World
    </CopyWithStatement>
  )
}

export default App
```

Read more at https://woodychau.hk © 2023 Woody Chau