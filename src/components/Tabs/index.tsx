import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, TabsProps } from '@material-tailwind/react';
import Button from 'components/Button';
import Course from 'components/Course';
import { Link } from 'react-router-dom';
import { useGetAllDataCatHotQuery } from 'features/Course/course.service';
import { useEffect } from 'react';
import LoadingLocal from 'components/LoadingLocal';
export default function TabsComponent() {
  const { data, isFetching } = useGetAllDataCatHotQuery();

  return (
    <Tabs className="rounded-2xl p-3 shadow-border-full" value="SEO">
      <TabsHeader className="bg-gray-200">
        {!isFetching &&
          data?.map(({ label, value }: any) => (
            <Tab key={value} value={value}>
              <span className="font-bold text-darkLight">{label}</span>
            </Tab>
          ))}
      </TabsHeader>
      <TabsBody>
        {isFetching && <LoadingLocal />}
        {!isFetching &&
          data?.map(({ value, courses }: any) => {
            return (
              <TabPanel className="px-1 py-3 pt-8" key={value} value={value}>
                <div className="flex justify-between space-x-3">
                  {courses?.map((item: any, index: any) => (
                    <Course key={index} data={item} />
                  ))}
                </div>
                <div className="pt-6">
                  <Link to={`/categories/${value}`} className="text-center">
                    <Button rounded_md border>
                      Xem thêm
                    </Button>
                  </Link>
                </div>
              </TabPanel>
            );
          })}
      </TabsBody>
    </Tabs>
  );
}
