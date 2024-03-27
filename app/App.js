import FontsSetupWrapper from "./setup/fonts/FontsSetup";
import NavigationSetupWrapper from "./setup/navigation/NavigationSetup";

export default function App() {
  return (
    <FontsSetupWrapper>
      <NavigationSetupWrapper />
    </FontsSetupWrapper>
  );
}
