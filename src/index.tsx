import { RootNavigation } from "@navigations";
import { MobileApp } from "./MobileApp";
import { LogBox } from "react-native";

const App = () => {
    LogBox.ignoreAllLogs();
    return (
        <MobileApp>
            <RootNavigation />
        </MobileApp>
    )
}
export default App;