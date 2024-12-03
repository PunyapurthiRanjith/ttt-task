import { Route, Routes } from "react-router-dom";
import NavbarCompo from "../navbar/navbar";
import HomeScreen from "../screens/homeScreen";
import JobPostingsScreen from "../screens/jobPostingsScreen";
import CommunityScreen from "../screens/communityScreen";
import SearchScreen from "../screens/searchScreen";
import ResourceScreen from "../screens/resourcesScreen";
import ChatsScreen from "../screens/chatsScreen";
import JobsScreen from "../screens/jobsScreen";
import NotificationsScreen from "../screens/notificationsScreen";
import ProjectsScreen from "../screens/projectsScreen";
import ProfileScreen from "../screens/profileScreen";
import DashboardScreen from "../screens/dashBoardScreen";
import SettingsScreen from "../screens/settingsScreen";
import HelpScreen from "../screens/helpScreen";
import InvalidScreen from "../screens/invalidScreen";
import ShopProductsScreen from "../screens/shopProductsScreen";
import DetailsScreen from "../screens/productDetailsScren";

const NavigationStackCompo = () => {
  return (
    <>
      <NavbarCompo></NavbarCompo>

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="jobPostings" element={<JobPostingsScreen />} />
        <Route path="community" element={<CommunityScreen />} />
        <Route path="search" element={<SearchScreen />} />
        <Route path="products" element={<ShopProductsScreen/>}/>
        <Route path="chats" element={<ChatsScreen />} />
        <Route path="jobs" element={<JobsScreen />} />
        <Route path="notifications" element={<NotificationsScreen />} />
        <Route path="projects" element={<ProjectsScreen />} />
        <Route path="profile" element={<ProfileScreen />} />
        <Route path="dashboard" element={<DashboardScreen />} />
        <Route path="settings" element={<SettingsScreen />} />
        <Route path="help" element={<HelpScreen />} />
        <Route path="products/:productId" element={<DetailsScreen/>}/>
        <Route path="*" element={<InvalidScreen />} />
      </Routes>
    </>
  );
};
export default NavigationStackCompo;
