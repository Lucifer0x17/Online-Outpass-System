import React, { useState, useEffect } from 'react';
import StudentDashboard from '../StudentDashboard';
import { Form } from '../../components/StudentLogin';
import supabase from '../../config/supabase';

const StudentAuth = () => {
    const [session, setSession] = useState(null);
    useEffect(() => {
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);
    return (
        <div>
            {!session ? <Form /> : <StudentDashboard session={session} />}
        </div>
    );
};

export default StudentAuth;
