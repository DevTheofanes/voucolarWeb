import { Route, Switch } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';

import { Category } from '../pages/Dashboard/Category';
import { Product } from '../pages/Dashboard/Product';

import { Personalize } from '../pages/Personalize';
import { PersonalizeBackground } from '../pages/Personalize/ChoiceBackground';
import { PersonalizeImage } from '../pages/Personalize/UploadImage';
import { PersonalizeStickers } from '../pages/Personalize/ChoiceStickers';
import { PersonalizeText } from '../pages/Personalize/ChoiceText';
import { PersonalizeFull } from '../pages/Personalize/Full';

import { InfosWho } from '../pages/Dashboard/Infos/Who';
import { InfosPresent } from '../pages/Dashboard/Infos/Present';

import { Cart } from '../pages/Cart';
import { DetailsCartPage } from '../pages/Cart/DetailsPage';

import { UserData } from '../pages/User';
import { SignIn } from '../pages/User/SignIn';
import { Register } from '../pages/User/Register';
import { FinishBuy } from '../pages/Cart/FinishBuy';

export function Routes() {
  return (
    <Switch>
        <Route path="/" exact component={Dashboard} />

        <Route path="/infos/who" component={InfosWho}/>
        <Route path="/infos/present" component={InfosPresent}/>

        <Route path="/personalize" exact component={Personalize} />
        <Route path="/personalize/background/:phone" component={PersonalizeBackground} />
        <Route path="/personalize/image/:phone/:fundo" component={PersonalizeImage} />
        <Route path="/personalize/stickers/:phone/:fundo" component={PersonalizeStickers} />
        <Route path="/personalize/text" component={PersonalizeText} />
        <Route path="/personalize/full" component={PersonalizeFull} />

        <Route path="/category/:id" exact component={Category}/>
        <Route path="/category/:name/product/:id" exact component={Product}/>

        <Route path="/cart" component={Cart}/>
        <Route path="/shopDetails" component={DetailsCartPage}/>
        <Route path="/shopFinish/:id" component={FinishBuy}/>

        <Route path="/user" exact component={UserData}/>
        <Route path="/user/login" component={SignIn}/>
        <Route path="/user/register" component={Register}/>
    </Switch>
  );
}
