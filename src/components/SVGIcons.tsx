import * as React from 'react';
import Svg, { Path, G, Rect, Circle } from 'react-native-svg';
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

export function AddIcon() {
  return (
    <Svg width="17" height="17" viewBox="0 0 17 17">
      <G id="Groupe_234" data-name="Groupe 234" transform="translate(-173 -690)">
        <Rect id="Rectangle_130" data-name="Rectangle 130" width="17" height="17" rx="2" transform="translate(173 690)" fill="#367c76" />
        <G id="x" transform="translate(181.5 681.107) rotate(45)">
          <Path id="Tracé_139" data-name="Tracé 139" d="M15.476,9.12a.412.412,0,0,1,0,.584L9.7,15.477a.413.413,0,0,1-.584-.584L14.892,9.12a.412.412,0,0,1,.584,0Z" transform="translate(0)" fill="#fff" fill-rule="evenodd" />
          <Path id="Tracé_140" data-name="Tracé 140" d="M9.12,9.12a.412.412,0,0,0,0,.584l5.773,5.773a.413.413,0,0,0,.584-.584L9.7,9.12a.412.412,0,0,0-.584,0Z" transform="translate(0)" fill="#fff" fill-rule="evenodd" />
        </G>
      </G>
    </Svg>
  );
}

export function RemoveIcon() {
  return (
    <Svg width="17" height="17" viewBox="0 0 17 17">
      <G id="Groupe_403" data-name="Groupe 403" transform="translate(-173 -690)">
        <G id="Rectangle_130" data-name="Rectangle 130" transform="translate(173 690)" fill="none" stroke="white" stroke-width="1">
          <Rect width="17" height="17" rx="2" stroke="none" />
          <Rect x="0.5" y="0.5" width="16" height="16" rx="1.5" fill="none" />
        </G>
        <G id="x" transform="translate(181.5 681.107) rotate(45)">
          <Path id="Tracé_139" data-name="Tracé 139" d="M15.476,9.12a.412.412,0,0,1,0,.584L9.7,15.477a.413.413,0,0,1-.584-.584L14.892,9.12a.412.412,0,0,1,.584,0Z" transform="translate(0)" fill="white" fill-rule="evenodd" />
          <Path id="Tracé_140" data-name="Tracé 140" d="M9.412,9Z" transform="translate(0)" fill={palette.darkGreen} fill-rule="evenodd" />
        </G>
      </G>
    </Svg>
  )
}

export function HeartIcon(props: any) {
  return (
    <Svg width="23.25" height="22.233" viewBox="0 0 23.25 22.233">
      <Path id="heart" d="M22.8,5.556a10.828,10.828,0,0,1-1.69,9.484,26.364,26.364,0,0,1-4.2,4.631c-1.382,1.343-4.474,4-5.294,4.074A6.684,6.684,0,0,1,9.5,22.3C6.268,19.74,2.789,16.621,1.024,13.21c-1.479-3.274-1.482-7.324.82-9.834a6.612,6.612,0,0,1,9.768.675,6.689,6.689,0,0,1,2.262-1.959A6.69,6.69,0,0,1,22.8,5.556Z" transform="translate(0 -1.511)" fill={props.on ? palette.darkGreen : "#d6d6d6"} />
    </Svg>
  )
}

export function StarIcon() {
  return (
    <Svg width="19" height="19" viewBox="0 0 19 19">
      <Path id="Polygone_42" data-name="Polygone 42" d="M8.552,2.82a1,1,0,0,1,1.9,0l1.2,3.584a1,1,0,0,0,.921.681l3.71.1a1,1,0,0,1,.6,1.778L13.857,11.4a1,1,0,0,0-.335,1.05l1.067,3.78a1,1,0,0,1-1.549,1.082l-2.955-2.138a1,1,0,0,0-1.172,0L5.959,17.314A1,1,0,0,1,4.41,16.232l1.067-3.78a1,1,0,0,0-.335-1.05L2.116,8.963a1,1,0,0,1,.6-1.778l3.71-.1A1,1,0,0,0,7.348,6.4Z" fill="#fab960" />
    </Svg>

  )
}

export function WalkingIcon() {
  return (
    <Svg width="13.833" height="22.466" viewBox="0 0 13.833 22.466">
      <G id="walk" transform="translate(0)">
        <Path id="Tracé_25" data-name="Tracé 25" d="M23.3,5.329a1.954,1.954,0,1,1-1.954-1.954A1.954,1.954,0,0,1,23.3,5.329Z" transform="translate(-12.677 -3.375)" fill="#2999d5" />
        <Path id="Tracé_26" data-name="Tracé 26" d="M20.517,9.819,17.044,8.636,12.6,10.254a1.38,1.38,0,0,0-.906,1.292v3.348h1.834V11.868l2.8-1.017L11.153,26.814h1.926l2.87-8.929.451.148L18.568,22v4.81H20.4V21.887a1.379,1.379,0,0,0-.168-.659l-2.153-3.947L19.74,12.2l1.1,1.988a1.376,1.376,0,0,0,1.2.707h2.94V13.059h-2.67Z" transform="translate(-11.153 -4.348)" fill="#2999d5" />
      </G>
    </Svg>
  )
}

export function GeoIcon() {
  return (
    <Svg width="13.474" height="17.965" viewBox="0 0 13.474 17.965">
      <G id="geo-alt" transform="translate(0 0)">
        <Path id="Tracé_28" data-name="Tracé 28" d="M11.237,17.965s6.737-6.384,6.737-11.228a6.737,6.737,0,1,0-13.474,0C4.5,11.581,11.237,17.965,11.237,17.965Zm0-7.86A3.368,3.368,0,1,0,7.868,6.737,3.368,3.368,0,0,0,11.237,10.105Z" transform="translate(-4.5 0)" fill="#707070" fill-rule="evenodd" />
      </G>
    </Svg>
  )
}

export function DeleteIcon() {
  return (
    <Svg id="Groupe_578" data-name="Groupe 578" width="25" height="25" viewBox="0 0 25 25">
      <G id="Ellipse_110" data-name="Ellipse 110" fill="none" stroke="#f04747" stroke-width="1">
        <Circle cx="12.5" cy="12.5" r="12.5" stroke="none" />
        <Circle cx="12.5" cy="12.5" r="12" fill="none" />
      </G>
      <G id="x" transform="translate(-0.81 -0.81)">
        <Path id="Tracé_342" data-name="Tracé 342" d="M17.463,9.157a.539.539,0,0,1,0,.763L9.919,17.464a.54.54,0,1,1-.763-.763L16.7,9.157a.539.539,0,0,1,.763,0Z" transform="translate(0 0)" fill="#f04747" fill-rule="evenodd" />
        <Path id="Tracé_343" data-name="Tracé 343" d="M9.157,9.157a.539.539,0,0,0,0,.763L16.7,17.464a.54.54,0,1,0,.763-.763L9.92,9.157a.539.539,0,0,0-.763,0Z" transform="translate(0 0)" fill="#f04747" fill-rule="evenodd" />
      </G>
    </Svg>
  )
}

export function ChevronRightIcon() {
  return (
    <Svg width="5.75" height="10.057" viewBox="0 0 5.75 10.057">
      <Path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M15.263,11.223l-3.806-3.8a.716.716,0,0,1,0-1.015.725.725,0,0,1,1.018,0l4.312,4.309a.717.717,0,0,1,.021.991l-4.33,4.339a.719.719,0,1,1-1.018-1.015Z" transform="translate(-11.246 -6.196)" fill="#707070" />
    </Svg>
  )
}



















