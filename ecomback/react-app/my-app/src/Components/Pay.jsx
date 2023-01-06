import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import styled from "styled-components";

const Container = styled.div``;

const Button = styled.button`
  width: 200px;
  height: 200px;
`;
const KEY =
  "pk_test_51LxmfVEDwm0WNe7Eds2CuaR4LV8KMG6ZizzqhSqAzdWeksXS8DSSJzx57ifzWHevvHCi6IGElogcGWuz4eKIwEwy00qbCpkxUI";
const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:4000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
        navigate("/success");
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate]);

  return (
    <Container>
      {stripeToken ? (
        <span> Processing. Please wait...</span>
      ) : (
        <StripeCheckout
          name="Biso"
          img="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxQUExYUFBQWFhYYFhcYGRgYFhcWGBYYFhgYFxYYGBYZKioiGRwnHxYWIzQjJy06MTExGCE2OzYvOiowMS4BCwsLDw4PHBERHTAoISgyODAwMC4wLjIxMzAyOjAwMjIwLjMyMDEwMDAwOTMyMDEwMDAwMjAwMDAwMDAwOjAwMP/AABEIAOkA2AMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAQQCBgUHCAP/xABJEAACAQICBgQHCg0EAwAAAAABAgADEQQhBRITMVGRBkFSYQciNXF0sbMUIzIzcnOBssHRFyU0QlNUdZOUocPh8BUkQ2IWZKL/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAgUBAwYE/8QANBEBAAECAwUGBQEJAAAAAAAAAAECEQMEMQUSIUFxMlFhgbHREyIzkfAUI0Jyc5KywcLS/9oADAMBAAIRAxEAPwDuaQTBMAQAEmIgIiQTAEwBAEmAmNhymUQMQLSSYJiAAkxEBESICTEQEgiTEBIiTAREQERIgRviZRAgCTEQKzVCGz3H1T7g3h1vK6kp1Zeff5v5QLJMATFCCLiZwEREBIJgmIACTEQKyVCGIO7fcXlgGY1EuJ8Fcrkbc8/P64FmTIBkwEREBIiTASDJiBVpOVJDbh12/nLU+dSmCJ8VqlcjY/Z98CxvmURAREQERIJgCZi9MEWMyAkwKiuVNjnw/tLKsDuzkkRAmQTBMQEmIgIiRATGpTBFpnECqjlTY8e/IcfNLCtcXEraTxyUKT1qp1UpozseCqLm3E900t9J43D0zpGtVGo12qYJyirToAFkFFzY+6FUEsCbOSRlZSA3+RNHfpBjsRSOMwqomHQbSnTYB62LVD46k7qAIDBQLte17ZiczW6b6PREd8XRUOiuqlxr6ri6koPGGXdxgbBEgGTAREx3wJmNSneZxAq06hXI3NhwlqIgIkRAEwBAEmAiIgJBMExASYlXXZWzzB4CBaiYq18xJgJMRAREQNY6b++Pg8Mfg1sSGccUw6PXAPcaiUp1l4Q9OticcyKxFHCtZQMgaoNyxPXuFrf9eE7O6anZnC4s/Aw+JG1PZpVkeg7nuVqiMeAUnqnSlegy4jE03+Etdg3ICeXNVTFMQvtgYNFePM1a6W6xVM+nHwmYWqXSCulb4wqmsMQBeyLUFhUa267Ehj3seMvaH6X01wtfCphDqVFxYFSmgBNOrtChu2qLKGAub5LNbp0hWbaMusoyRe7rdu82y7rSzpEkpqp8OpemBfjk58wXW598001zTNufC/l+cVvmcjhYuFfdiKIirdtf97TSYjtdmOPLTR3FofpkEpUFr4XFUgy0U2rJTamWqaqJco7MAWYbx1zcp0t0Zr4yolNXCYilSxFOqaSVvfitFWK6lGqdXVDujEhv+MCdp6C05RxKE0ma6ELUpurU6lNrX1alNrFcvoPVee2ivfpu5HM4E4GLOFVrDlZMRJtBERASIkwETB1uCN0QM4mCODumcBIJgmICTEQEwdARM5ECqGKZZebPn/aWRuykOgItPghKm2/Ph1cYFqQTIVri4ml+ErEvVNDRtJihxZfbON6YekAaoHAvcKOr4QO+B8NI9PqtZnTRtJKioSrYqsWXDhh+bTC+NWPeuXXmDeahj+lWl1xTUfd6C1MVfFw1LVzYrqjWBa2W+82rZoAtOkoSlTFqajcFH2neTNN00ttJn0RPaGc9ibXqrx5owuzETx7/AB6dyE1dzl/wkYmmrU9IYWliKDAo9SiGXxGFjtKbXuLE3tlNO6W0dQmrSY1aFWmKa1SblVJtT2wH5yqSuvuayn4WtNnRARnunCYJRhsS2HKhsPWRnVG+Dwq0/Md/dlbPObMHaFVfDE4+3fHjGttJjunXbl81iYNe/RPH/DhhjBYLSRmA8UG2ogztmzfdFPCgnWqHXbu1lVB2Uz/nOd050HrYdRWoNVfCuNZHA2uxBOaVqO/LdrrllnacfhdFYmsBs3BW/wAKnSRl5lio+meyqiaZ+X78fZ2uBnsDMYUVYlptHGm9ERHlVVE+dV47pWdBO9GtTqITWYMNTDs1jVIYABalvFHWS2RF+sztvwdhGw7VhU2lWrUZsQxUowrZB6bUznT1LBAp3BRxvOtujfR6jTqazO2Jr/ocMwr1SVOQrVgdnRUEDewOXETsjozoyrTrVsTVCipWVA9OlfZqKYOqSxzq1M7GoQMgAALZ+rAiYp4x+dPyXObWxaK8WNyq8RFrRxiOk8787fLHCImW1xETeqyREmAiIgIiICQTBMQEmIgIiRASYiBo2k+meJq1atHR9Ck60HNOrXrsy0tqLa1OmqeM5F8z/YloLp45rjDY3DijWKlqb0316VZR8LUvmGHWpztOI8Hp/FlAnMtUxDMetm2zC575X6Vj/caPPX7ptfuNNrj6bCc/n9p4uFmpwaLRERra/G299uXTje9kJqm9natNwwBBuDmDNC0w5OnTn8DRZI7ia5v6hNs6OvelbgT9/wBs1LS/l1/2V/XMt8DFnFy9OLpem/3j3SveGVBZpmnR+M29ET2jTdcPumlae8pt6KntGnE5Ltz09kF2mZwunx7/AIRuvaOPoZM/UJzFLdOI6Q/G4X51/qGWOB9Tyn0lGNXbXQBtbBoDuDOP/on7ZbxvRTB1W16mGoO3aejTY8yLyn4PPyRflv65ss6fLfRo/hj0bY0hTwmj6dMBUVVUbgoCjkJaUWmUTeySIkwETEG8ygJERACJMQIkxECtdlbiDwH+cJ91YEXEh1BFjK+acLcM+d+MC1JmCtcXEzgIiIHV3g88l4f5eI9vUnw6WfH4D0v+m0+/g88l4f5WI9u8jpVouvW2D4dqa1KNXaDa62qfFK/m59c43akxG0Kr90f22aqu03zo58X9J+yappby7U/ZX9cyjgcbpmmNVX0fa/Wlc/bOAxGN0k2lCWqYTbe4bEhKmz2W13AXvr3O/daW+T2hlqMtRh1V8YptPCeXklExazbaBtNO075Tb0RPaGc1on3cH/3DYdqdjlTRw1+o3JtOH0ugOknP/q0+sD/kbeOX85Q5ai+JOl7ctOTCzSnEdIfjsJ86/wBQzl6c4npAPfsL86/1DPXgfU8p9JRjV2x4PPyRflv65W0x4RMLRqPSRK+JqUzaqMNSNXZG5Fna4ANwRa9xYz49H8S1PRVaomTJTxDL3FVYg8xOL6JYZaWj8KqC2vSWq562qVBrMzHrOfKXuJmf02RjFte0Rw8Zs2XtTdt3R3pXhcYutRqgkHVZGBR0bsspzBnMzqSrSFPS1NkGrtsNU2lsg5psuoxHWwGV+E7S0bVLU1J32z77ZXkMhtH9TVNM024RVH3mJjynSeccoIqutTF1uLTKJaJKqOVJBzHnz693KWbzGogIldWKkDO3f9hgWhJkSYCIiAiJEBMWQEWmcQKq3U233PD/ADOfdGuLzOICREmB1B0F05haejaFOpiaCOGr3VqqKwvWYi6k3FwQZy3/AJLg/wBbw/7+n982bF9BMA5Le48Pckk+9ILk7zkJ8PwfaP8A1LD/ALpZz2f2RjZnHnFpmmIm2szyi3KJQmi8uA/8lwf63h/39P75wWGxtOrpdmpVEqL/AKcRdGVxfbA2uvXmOc3z8H+j/wBSw/7pZqw0DQoaZqU6NJKaf6aW1UGqNY1ra1h5hynlp2DjxFV6qdO+f+WNyzlKS3E0zTeWk2t+qp7QzdKG6aXp0fjNvRE9o0rMnP7SensLq2tfzZZ8P7ThukJ9+wvzr/UM5inOD6V1tSphm1We1R/FUXY+J1CWWDO9ix0n0lGNXZOifI+I+YxP1GlTo7+QYH0Wl9VZwejemZ9wVcOMBjmapTrIGWgCl6ikC5vfK/Cc9oFCuCwiMCrph6aspFirBVuD3z2bRxsKdn/DiqN75eF4vwmEpn5XEaQ8qYb0av61nZehfi18x9ZnWmP8qYb0av61nZehfil832madifWj+X/ALyUar0iTIE6ZsJi6AzOIFanrDK1wLdf8xLMSCYAmIAiAkxEBERASIkwEgGTKoupzzGfD6fpzgWomKtcXjfAb5oGl/Lr/sr+uZ2DOvtLj8ev+yv67SNXZnoPph900rT/AJTb0RPaGbrROU0rT3lNvRE9o04HJ9uens1LdLdOI6Q/G4X51/qGXdIYDbIF2lSnY3vTbVJyIsTwzmt6W0MVq4dTiMQ2s5F2qXK2W91NsjLXL00zXe/KeXhLEOzejvxI+U3rnIia30Z8HxrUFqe78cvjN4oreLkeFpeqeDVuvSGPFuFcC/8AL/LzzVbJzOJM1008J4x2dP6vVncU9IeVMN6NX9azsvQvxa+Y+szTNE+DpaNYVzi8TWdUZF2zhwA1r2yB6uM3bR9LVQLvtLfZWTxsDFviU2jctrGu9flM8pSppmJWpMRL1MiJBMATAEASYGLNYXiRUS4tEDOJgjXF7EeeZwEiJMBERATB1BFjM5jvgViSneCeGX0WllWuLyHUEWM+KqymwuRmer/AYFmdfaX8uv8Asr+uZv67poGlvLr/ALJPt2kauzPQZ0d00rT3lNvRE9oZutAZTStO+VH9Ep+0M4HJTHxJ6ezUuUpxPSAe/YT51/qGcvSGU4jpF8dhfnX+oZY4Ex8SOk+ksRq7Y8Hv5Ivy39c2J0BGc13we/ki/Lf1zZJ1GV+jR0j0bY0VAShtnbv6/ulpbdUh0B3z401ZchmB37/NN7KzESCYAmAIAkwEREBEgmIEyIkwESAZMBETHfAb5lEQK+Mw4qU3psWAdWUlWKsAwIJVhmpz3jdNQPgzw9/jsX/FVfvm7xA0j8G9D9NjP4ut98+R8FuFLa5fEltXV1jiamtq3vq62+1+qb3JgaJ+C3DdvF/xVSfJvBNgy2sTiS1rXOIe9uF+E35TfOZSEYdEaRH2GgfgownHE/xFSYv4JMEbE+6DbdfEObebhOwIEzFFMcho1HwY4dRZauKUcBiaoHIGZnwbUP0+M/iqv3zd4krDXujXRhMIzMlSu+uADtaz1QLXIsGyBzmwxIJgCYAgCQzWF4GUSAZMBIJgmAIACJMQERECrYqd9xnvP0n6Z90e4vJZbixlZ7puJz7haBZ3zKYI1xeZwEREBIiTASCJMQKguhPWP83SyGyvIcAjOV2up6+e+BaEmYqb5zKAiJBMATAEASYCYMtxYzOIFRLplvz7/pP9pavMXUHIyuCVNurmLQLQEmRJgIiICImO+A3wy3FjMogVgjKcrkb9/wDljPupy3W7plEBIiTAREQESIEBIK33zKIFZEZTlnlx3yzEgmAJgCAJMBERASCYJgCAAmNRARYzOIFdKbA5Wtly6yO+WIkEwBMQBED57Ze0vMRt07S8xPJWHwmuwRVBZsgMhc2yFz1nd559Bo19RXFJijWswQkZsUAuBkSwsBvNxxEnuD1jt07S8xG3TtLzE8pPoWsNX3ip4wJAFNiQFOq1wBcWNt/EcRPrR6PVWTaaiopYIu0ZKRdiFayK9i2TKct9xa8xu+I9UbdO0vMRtl7S8xPKmI0BiEYq2Hq32hpZUnIaoCRqKwFmbI5CZP0frLbXpal1LXcFQtmqLqMSPFe9KpZTn4sbo9U7dO0vMSFxCH85eYnkfZjgOUbMcBymdweudunaXmI26dpeYnkbZjgOUbMcByjcHrkVl7S8xG3TtLzE8jbMcByjZjgOUbg9c7dO0vMRt07S8xPI2zHAco2Y4DlG4PXJxCdpeYgVl7S8xPI2zHAco2Y4DlG4PXJxCD85eYkLiEP5y8xPI+zHAco2Y4DlG4PXO3TtLzEGuvaXmJ5G2Y4DlGzHAchG4PXIrp2l5iNunaXmJ5G2Y4DkI1F4DkI3B6526dpeYjbp2l5ieR9QcByEai8ByEbg9cGuvaXmIFdO0vMTyNqrwHIRqrwHIRuD1zt07S8xJnkUKvAchEbgzp1CpDKbMpDA8CpuDzE5lukz3uKaLY2QDcqHUBpnLWIsgzBGZJzytwsSbDkqOllVVQUfFRlZbudYFGZ01mAGsA1SrcWFw43aoMtYPpO9M1WVPHqk3JqVNnmgTxqIIWoRmVJ3E3zsJwcRYbIemb3YjD0wXD028epnRd6lRqYsRqnWqv44zAt13JoaU05tqFKhslVKGtsbMWZA7u7qSfhA6yb92yFt5E4qIsEREyEREBERAREQEREBERAT74HFtSbWW19UjMXGeam3FWCsO9Re4uD8Igcv/r+d/c+Ht2RTAXqtkPN6uFzK9IjqqpoUGVSxAKZDW6gNwGZ884eJiw5OpprW1L0KPiBgLLb4YseW8cO+Z1dPE3th8OmWRSmAVYEkMp33uRlu8UTiYiw5wdKqgJIRc772drZUgM79WxSx33AJub3DpVVDBglMAIqavjEFVFQC+e/3y9/+onBxFh9sdiTUqNUIsWtcXvuAG8+a/wBMT4xMj//Z"
          billingAddress
          shippingAddress
          description="Your total is £20"
          amount={2000}
          token={onToken}
          stripeKey={KEY}
        >
          <Button>PAY NOW</Button>
        </StripeCheckout>
      )}
    </Container>
  );
};

export default Pay;
