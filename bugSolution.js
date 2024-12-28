```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //Ensure the cleanup function always executes. Add logging to catch any exceptions.
    let cleanupRan = false;
    const cleanup = () => {
        console.log('Cleanup function runs!');
        cleanupRan = true;
    };
    return cleanup;
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```