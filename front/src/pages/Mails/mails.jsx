import BaseLayout from "../../components/Sidebar/BaseLayout";
import { ChatEngine } from 'react-chat-engine';

const Mails = () => {
  return (
    <BaseLayout>
      <div>
        <ChatEngine
          projectID='dbc9b421-f456-462d-a2d1-b2081196b3a3'
          userName='dim'
          userSecret='Lemishko26'
        />
      </div>
    </BaseLayout>
  )};

export default Mails;
