import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';

// students
import Home from './pages/student/home/Home';
import LessonTable from './pages/student/lessonTable/LessonTable';
import SciencesList from './pages/student/sciencesList/SciencesList';
import Tasks from './pages/student/tasks/Tasks';
import Account from './pages/student/account/Account';
import Library from './pages/student/library/Library';
import Books from './pages/student/books/Books';
import DownloadLogin from './pages/student/downloadLogin/DownloadLogin';
import Serfetikat from './pages/student/serfetikat/Serfetikat';
import Login from './pages/student/login/Login';
import NotFound from './pages/notFound/NotFound';

// =====teacher=====
import HomeTeacher from './pages/teacher/home/HomeTeacher';
import LessonTableTeacher from './pages/teacher/lessonTable/LessonTableTeacher';
import LibraryTeacher from './pages/teacher/libraryTeacher/LibraryTeacher';
import TasksTeacher from './pages/teacher/tasks/TasksTeacher';
import TeacherBooks from './pages/teacher/books//TeacherBooks';
import TestListTeacher from './pages/teacher/yakuniyTest/TestListTeacher';
import TeacherTasksList from './pages/teacher/tasksList/TeacherTasksList';
import TeacherTestQuiz from './pages/teacher/testQuiz/TeacherTestQuiz';
import SubmitStudent from './pages/teacher/submitStudent/SubmitStudent';


import Dars from './pages/Adminstrator/Dars/Dars';
import Kutubxona from './pages/Adminstrator/Kutubxona/Kutubxona';
import Talabalar from './pages/Adminstrator/Talabalar/talabalar';
import Hujjatlar from './pages/Adminstrator/Normativ/Hujjatlar';
import Fanyaratish from './pages/Adminstrator/Fan-yaratish/Fanyaratish';
import Guruxyaratish from './pages/Adminstrator/Guruxyaratish/Guruxyaratish';

import './App.css';
import './hikmatulloh.css';
import Admin from './pages/Adminstrator/Admin/Admin';
import AccountTeacher from './pages/teacher/account/AccountTeacher';
import TestList from './pages/student/testList/TestList';
import TestQuiz from './pages/student/testQuiz/TestQuiz';


import Teacher__Add from './pages/Adminstrator/teacher__add/Teacher__Add';


function App() {
  return (
    <>
      <Routes>
        {/* ===students=== */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="dars-jadvali" element={<LessonTable />} />
        <Route path="fanlar" element={<SciencesList />} />
        <Route path="fanlar/vazifalar" element={<Tasks />} />
        <Route path="fanlar/vazifalar" element={<Tasks />} />
        <Route path="account" element={<Account />} />
        <Route path="kutubxona" element={<Library />} />
        <Route path="kutubxona/badiy-adabiyotlar" element={<Books />} />
        <Route path="kutubxona/xorijiy-adabiyotlar" element={<Books />} />
        <Route path="kutubxona/darsliklar" element={<Books />} />
        <Route path="kutubxona/oquv-qollanmalar" element={<Books />} />
        <Route path="testlar" element={<TestList />} />
        <Route path="testlar/yakuniy-test" element={<TestQuiz />} />

        {/* ===Login va Sefetikat=== */}
        <Route path="login" element={<Login />} />
        <Route path="download-login" element={<DownloadLogin />} />
        <Route path="serfetikat" element={<Serfetikat />} />
        {/* ===Login va Sefetikat=== */}

        {/* ===Teacher=== */}
        <Route path="/" element={<Layout />}>
          <Route path="/HomeTeacher" element={<HomeTeacher />} />
        </Route>
        <Route path="/teacher-account" element={<AccountTeacher />} />
        <Route path="/teacher-dars-jadvali" element={<LessonTableTeacher />} />
        <Route path="/teacher-kutubxona" element={<LibraryTeacher />} />
        <Route
          path="/teacher-kutubxona/badiy-adabiyotlar"
          element={<TeacherBooks />}
        />
        <Route
          path="/teacher-kutubxona/xorijiy-adabiyotlar"
          element={<TeacherBooks />}
        />
        <Route
          path="/teacher-kutubxona/darsliklar"
          element={<TeacherBooks />}
        />
        <Route
          path="/teacher-kutubxona/oquv-qollanmalar"
          element={<TeacherBooks />}
        />
        <Route path="/teacher-fan-topshiriqlari" element={<TasksTeacher />} />
        <Route
          path="/teacher-topshirganlar-royhati"
          element={<TeacherTasksList />}
        />
        <Route path="/teacher-yakuniy-test" element={<TeacherTestQuiz />} />
        <Route path="/submit-students" element={<SubmitStudent />} />

        {/*-----Admin----- */}
        <Route path="Admin" element={<Admin />}>
          <Route path="admin/lesson" element={<Dars />} />
          <Route path="admin/kutubxona-admin" element={<Kutubxona />} />
          <Route path="admin/Talabalar" element={<Talabalar />} />
          <Route path="admin/Normativ-hujjatlar" element={<Hujjatlar />} />
          <Route path="admin/Fan-yaratish" element={<Fanyaratish />} />
          <Route path="admin/Guruh-yaratish" element={<Guruxyaratish />} />
          <Route path="admin/teacher__add" element={<Teacher__Add />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
