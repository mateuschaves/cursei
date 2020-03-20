import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import CourseDetail from '~/pages/Course/CourseDetail';

const Routes = createAppContainer(createSwitchNavigator({ CourseDetail }));

export default Routes;
