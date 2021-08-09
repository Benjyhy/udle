import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { palette } from '../../styles/base';

export function HomeTabIcon(props: any) {
  return (
    <Svg width="19.196" height="20.675" viewBox="0 0 19.196 20.675">
      <Path id="Union_1" data-name="Union 1" d="M-1628.811-12901.817a.739.739,0,0,1-.74-.736v-5.908h-2.954v5.908a.738.738,0,0,1-.736.736h-6.645a.739.739,0,0,1-.739-.736v-10.339a.751.751,0,0,1,.214-.522l8.86-8.859a.741.741,0,0,1,.525-.218.739.739,0,0,1,.522.218l3.908,3.907v-1.906a.739.739,0,0,1,.736-.74h1.479a.739.739,0,0,1,.736.74v4.857l2,2a.751.751,0,0,1,.214.522v10.339a.739.739,0,0,1-.74.736Zm0-8.121a.738.738,0,0,1,.736.736v5.909h5.169v-9.291l-8.121-8.124-8.124,8.124v9.291h5.17v-5.909a.739.739,0,0,1,.739-.736Z" transform="translate(1640.625 12922.492)" fill={props.focus ? palette.darkGreen : palette.lightGrey} />
    </Svg>
  );
}

export function SearchTabIcon(props: any) {
  return (
    <Svg width="20.009" height="20.014" viewBox="0 0 20.009 20.014">
      <Path id="Icon_ionic-ios-search" data-name="Icon ionic-ios-search" d="M24.275,23.059,18.71,17.442a7.931,7.931,0,1,0-1.2,1.219l5.529,5.581a.856.856,0,0,0,1.209.031A.862.862,0,0,0,24.275,23.059Zm-11.8-4.33a6.262,6.262,0,1,1,4.429-1.834A6.224,6.224,0,0,1,12.478,18.729Z" transform="translate(-4.5 -4.493)" fill={props.focus ? palette.darkGreen : palette.lightGrey} />
    </Svg>
  );
}

export function CartTabIcon(props: any) {
  return (
    <Svg width="22.238" height="20.756" viewBox="0 0 22.238 20.756">
      <Path id="Tracé_141" data-name="Tracé 141" d="M0,5.241A.741.741,0,0,1,.741,4.5H2.965a.741.741,0,0,1,.719.562l.6,2.4H21.5a.741.741,0,0,1,.719.921l-2.224,8.9a.741.741,0,0,1-.719.562H5.93a.741.741,0,0,1-.719-.562L2.387,5.983H.741A.741.741,0,0,1,0,5.241ZM4.655,8.948,6.509,16.36H18.7l1.854-7.413Zm2.758,11.86A1.483,1.483,0,1,0,8.9,22.291,1.483,1.483,0,0,0,7.413,20.808ZM4.448,22.291a2.965,2.965,0,1,1,2.965,2.965A2.965,2.965,0,0,1,4.448,22.291Zm13.343-1.483a1.483,1.483,0,1,0,1.483,1.483A1.483,1.483,0,0,0,17.791,20.808Zm-2.965,1.483a2.965,2.965,0,1,1,2.965,2.965A2.965,2.965,0,0,1,14.826,22.291Z" transform="translate(0 -4.5)" fill={props.focus ? palette.darkGreen : palette.lightGrey} fill-rule="evenodd" />
    </Svg>
  );
}

export function ProfileTabIcon(props: any) {
  return (
    <Svg width="22.26" height="22.26" viewBox="0 0 22.26 22.26">
      <Path id="account" d="M17.13,20.856c6.147,0,11.13,2.325,11.13,5.194v3.71H6V26.05C6,23.181,10.983,20.856,17.13,20.856Zm9.646,5.194c0-2.048-4.318-3.71-9.646-3.71S7.484,24,7.484,26.05v2.226H26.776ZM17.13,7.5a5.194,5.194,0,0,1,5.194,5.194,5.374,5.374,0,0,1-1.307,3.445,5.025,5.025,0,0,1-3.887,1.749,5.194,5.194,0,1,1,0-10.388Zm0,1.484a3.71,3.71,0,1,0,3.71,3.71,3.71,3.71,0,0,0-3.71-3.71Z" transform="translate(-6 -7.5)" fill={props.focus ? palette.darkGreen : palette.lightGrey} />
    </Svg>
  );
}
