import { Ribbon, RequestBuilder } from '../../components/StudentDashboard';

const StudentDashboard = (session) => {
    return (
        <>
            <Ribbon session={session} />
            <RequestBuilder />
        </>
    );
};

export default StudentDashboard;
