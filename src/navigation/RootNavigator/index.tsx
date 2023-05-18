import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../../screens/Home';
import { Pathes } from '../../contants/routes';
import { AllWords } from '../../screens/AllWords';
import { ImageTest } from '../../screens/ImageTest';
import { ResultsScreen } from '../../screens/ResultsScreen';
import { CommonTest } from '../../screens/CommonTests';
import { WordTest } from '../../screens/CommonTests/WordTest';
import { WordDescriptionTest } from '../../screens/CommonTests/WordDescriptionTest';
import { CompleteWordTest } from '../../screens/CommonTests/ComplateWordTest';

export const RootNavigator = () => {
  return (
    <Routes>
      <Route path={Pathes.home} element={<Home />} />
      <Route path={Pathes.words} element={<AllWords />} />
      <Route path={Pathes.imageTest} element={<ImageTest />} />
      <Route path={Pathes.results} element={<ResultsScreen />} />
      <Route path={Pathes.commonTest} element={<CommonTest />} />
      <Route path={Pathes.wordTest} element={<WordTest />} />
      <Route path={Pathes.descriptionTest} element={<WordDescriptionTest />} />
      <Route path={Pathes.completeWordTest} element={<CompleteWordTest />} />
    </Routes>
  );
};
