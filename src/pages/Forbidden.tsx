import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const ForbiddenPage: React.FC = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/"); // bosh sahifaga yo'naltirish
  };

  return (
    <Result
      status="403"
      title="403"
      subTitle="Sizda bu sahifaga kirish huquqi yo‘q."
      extra={
        <Button type="primary" onClick={goHome}>
          Bosh sahifaga qaytish
        </Button>
      }
    />
  );
};

export default ForbiddenPage;
