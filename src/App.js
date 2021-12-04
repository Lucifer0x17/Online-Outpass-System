import React, { useState, useEffect } from 'react';
import supabase from './config/supabase';

import StudentAuth from './views/StudentAuth';

function App() {
    const getData = async () => {
        const { data, error } = await supabase
            .from('outpass')
            .select('*')
            .eq('parent_consent', true)
            .single();
        console.log(data, error);
        if (!error) setData(data);
    };
    useEffect(() => {
        getData();
    }, []);
    const [data, setData] = useState({});
    // return <div>{`${JSON.stringify(data)}`}</div>;
    return <StudentAuth />;
}

export default App;
