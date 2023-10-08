import React from 'react';

import { TIconProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_445_16337)">
        <rect width="24" height="24" transform="translate(0 0.5)" fill={color} fill-opacity="0.01" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.587 15.5H5C4.73478 15.5 4.48043 15.6054 4.29289 15.7929C4.10536 15.9804 4 16.2348 4 16.5C4 16.7652 4.10536 17.0196 4.29289 17.2071C4.48043 17.3946 4.73478 17.5 5 17.5H16.591L15.293 18.796C15.1144 18.9853 15.0165 19.2368 15.0202 19.4971C15.0239 19.7574 15.1288 20.0061 15.3128 20.1903C15.4967 20.3745 15.7452 20.4798 16.0055 20.4838C16.2658 20.4879 16.5174 20.3904 16.707 20.212L19.712 17.211C19.8993 17.0232 20.0045 16.7687 20.0045 16.5035C20.0045 16.2383 19.8993 15.9838 19.712 15.796L16.707 12.793C16.6142 12.7002 16.5039 12.6265 16.3826 12.5763C16.2613 12.526 16.1313 12.5002 16 12.5002C15.8687 12.5002 15.7387 12.526 15.6174 12.5763C15.4961 12.6265 15.3858 12.7002 15.293 12.793C15.2002 12.8858 15.1265 12.9961 15.0763 13.1174C15.026 13.2387 15.0002 13.3687 15.0002 13.5C15.0002 13.6313 15.026 13.7613 15.0763 13.8826C15.1265 14.0039 15.2002 14.1142 15.293 14.207L16.587 15.5ZM7.418 7.5L8.712 6.207C8.80484 6.11416 8.87849 6.00393 8.92874 5.88263C8.97899 5.76132 9.00485 5.6313 9.00485 5.5C9.00485 5.3687 8.97899 5.23868 8.92874 5.11737C8.87849 4.99607 8.80484 4.88584 8.712 4.793C8.61915 4.70016 8.50893 4.62651 8.38763 4.57626C8.26632 4.52601 8.1363 4.50015 8.005 4.50015C7.8737 4.50015 7.74368 4.52601 7.62237 4.57626C7.50107 4.62651 7.39084 4.70016 7.298 4.793L4.293 7.796C4.20002 7.88887 4.12626 7.99916 4.07594 8.12056C4.02562 8.24196 3.99971 8.37208 3.99971 8.5035C3.99971 8.63492 4.02562 8.76504 4.07594 8.88644C4.12626 9.00784 4.20002 9.11813 4.293 9.211L7.298 12.211C7.48564 12.3985 7.74008 12.5038 8.00535 12.5037C8.27062 12.5036 8.52499 12.3981 8.7125 12.2105C8.90001 12.0229 9.0053 11.7684 9.0052 11.5031C9.00511 11.2379 8.89964 10.9835 8.712 10.796L7.414 9.5H19C19.2652 9.5 19.5196 9.39464 19.7071 9.20711C19.8946 9.01957 20 8.76522 20 8.5C20 8.23478 19.8946 7.98043 19.7071 7.79289C19.5196 7.60536 19.2652 7.5 19 7.5H7.418ZM3 0.5H21C21.7956 0.5 22.5587 0.81607 23.1213 1.37868C23.6839 1.94129 24 2.70435 24 3.5V21.5C24 22.2956 23.6839 23.0587 23.1213 23.6213C22.5587 24.1839 21.7956 24.5 21 24.5H3C2.20435 24.5 1.44129 24.1839 0.87868 23.6213C0.31607 23.0587 0 22.2956 0 21.5L0 3.5C0 2.70435 0.31607 1.94129 0.87868 1.37868C1.44129 0.81607 2.20435 0.5 3 0.5V0.5Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_445_16337">
          <rect width="24" height="24" fill={color} transform="translate(0 0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Svg;
