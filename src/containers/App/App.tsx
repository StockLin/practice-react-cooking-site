import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '../../components/MainLayout';
import Content from '../../components/Content';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route
              path='/'
              element={
                <Content
                  title="Let's Get Cooking"
                  description="Explore the best recipes from around the world Make cooking enjoyabke again."
                  buttonText="Explore Recipes"
                />
              }
            />
            <Route
              path='/dinner-tv'
              element={
                <Content
                  title="Dinner TV"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus animi reprehenderit at adipisci eveniet ab iusto voluptatem et nam."
                  buttonText="Explore Video"
                />
              }
            />
            <Route
              path='/cooking-school'
              element={
                <Content
                  title="Cooking School"
                  description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ipsa consectetur illum, vitae vel saepe?"
                  buttonText="Take a Course"
                />
              }
            />
            <Route
              path='/about'
              element={
                <Content
                  title="About Us"
                  description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, totam. Mollitia maxime laboriosam, asperiores magni commodi, molestiae est aperiam quis temporibus nihil expedita. Laboriosam iusto blanditiis eos impedit. Amet, dolorum."
                  buttonText="More"
                />
              }
            />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
