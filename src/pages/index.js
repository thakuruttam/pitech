
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

import Customers from './customers'

const now = new Date();

const Page = () => (
  <>
    <Customers />
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
