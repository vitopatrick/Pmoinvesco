import { Container, Typography } from "@mui/material";
import React from "react";

const Greeting = () => {
  return (
    <Container>
      <Typography textAlign="center" variant="body2" sx={{ my: 3 }}>
        Trading any financial asset is inherently risky and should be treated as
        such. Always do your own research and analysis before purchasing or
        selling any financial asset. Income is in no way guaranteed and you may
        lose money by trading stocks and options. The purpose of our platform is
        to educate students on various types of trading strategies, not to trade
        for students, provide signals, or in any way tell people specifically
        what assets to buy or sell.
      </Typography>
      <Typography textAlign="center" variant="body2" sx={{ my: 3 }}>
        The views and opinions expressed in the pmoinvesco Trading School group
        chat by students, instructors, or others are only for discussion
        purposes and shall not be misconstrued as financial advice. No decision
        to trade any financial asset should be made without doing individual
        research, and any decision to trade a financial asset is completely the
        responsibility of the student.
      </Typography>
      <Typography textAlign="center" variant="body2" sx={{ my: 3 }}>
        Buying, holding, and trading cryptocurrency is inherently risky and
        should be treated as such. Cryptocurrencies are digital currencies that
        fluctuate in value rapidly and can cause significant financial losses.
        Any choice to buy or own the HSX cryptocurrency or any cryptocurrencies
        discussed in pmoinvesco content is solely the decision of the user.
        Always do your own research and due diligence before purchasing or
        trading any cryptocurrency.
      </Typography>
      <Typography textAlign="center" variant="body2" sx={{ my: 3 }}>
        Neither pmoinvesco Inc. nor its instructors are licensed, financial
        advisors.
      </Typography>
    </Container>
  );
};

export default Greeting;
