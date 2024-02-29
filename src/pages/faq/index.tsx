import React from "react";
import SEO from "@/components/SEO";
import AuthLayout from "@/layouts/AuthLayout";

import { Collapse, CollapsePanelProps, CollapseProps } from 'antd';
import Icon, { EIconColor, EIconName } from "@/components/Icon";
import { dataFaqOptions } from "@/components/MultipleCheckboxCollapse/MultipleCheckboxCollapse.data";
const { Panel } = Collapse;

const CollapseModify: React.FC<CollapseProps & { children?: React.ReactNode }> = Collapse;
const PanelModify: React.FC<CollapsePanelProps & { children?: React.ReactNode }> = Panel;

const FAQ = () => {

   return (
    <div className="SignUp Faq-page">
      <div className="SignUp-wrapper">
        <div className="AuthLayout-card">
          <div className="MultipleCheckboxCollapse faq-collapse">
              <CollapseModify
                expandIcon={({ isActive }): React.ReactNode => (
                  <div className="MultipleCheckboxCollapse-item-header-icon">
                    <Icon name={isActive ? EIconName.Minus : EIconName.Plus} color={EIconColor.WHITE} />
                  </div>
                )}
              >
                {dataFaqOptions.map((parent) => {
                   return (
                    <PanelModify
                      header={<div className="MultipleCheckboxCollapse-item-header flex items-center">
                        <div className="MultipleCheckboxCollapse-item-header-title">{parent.title}</div>
                        </div>} 
                      key={parent.key}>
                      A dog is a type of domesticated animal.
                      Known for its loyalty and faithfulness,
                      it can be found as a welcome guest in many households across the world.
                    </PanelModify>
                   )
                })}
            </CollapseModify>
          </div>
        </div>
      </div>
    </div>
   );
}
export default FAQ;


FAQ.getLayout = function (page: React.ReactNode) {
    return (
      <>
        <SEO />
        <AuthLayout>{page}</AuthLayout>
      </>
    );
  };
  