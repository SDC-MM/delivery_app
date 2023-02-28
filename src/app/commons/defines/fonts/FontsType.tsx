import {ResourceKey} from '@rn-core/core';

export interface FontsType extends ResourceKey {
  fontFamily: string;
  fontWeight?: string | any;
  color: string;
  fontSize: number;
  lineHeight?: number | any;
}

export interface InfoFontsType extends ResourceKey {
  fontNN_FW700_17_23: FontsType;
  fontNN_FW700_18_25: FontsType;
  fontNN_FW700_11_15: FontsType;
  fontNN_FW600_13_18: FontsType;
  fontNN_FW600_16_22: FontsType;
  fontNN_FW600_15_20: FontsType;
  fontNN_FW600_14_19: FontsType;
  fontNN_FW400_10_12: FontsType;
  fontNN_FW400_14_19: FontsType;
  fontNN_FW400_12_15: FontsType;
  fontNN_FW400_15_20: FontsType;
  fontNN_FW400_16_22: FontsType;
  fontNN_FW400_17_23: FontsType;
  fontNN_FW700_22_28: FontsType;
  fontNN_FW600_19_25: FontsType;
  fontNN_FW700_16_22: FontsType;
  fontNN_FW500_16_22: FontsType;
  fontNN_FW700_12_16: FontsType;
  fontNN_FW500_12_15: FontsType;
  fontNN_FW400_32_44: FontsType;
  fontNN_FW700_32_44: FontsType;
  fontNN_FW400_24_32: FontsType;
  fontNN_FW700_26_32: FontsType;
  fontNN_FW800_20_27: FontsType;
  fontNN_FW700_14_19: FontsType;
  fontNN_FW700_15_20: FontsType;
  fontNN_FW700_13_17: FontsType;
  fontNN_FW700_30_41: FontsType;
  fontNN_FW400_13_18: FontsType;
}
