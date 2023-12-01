
import React, { useState, useEffect } from "react";
import { Scanner } from "./Scanner";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from '@/Navigation';
import { RootScreens } from "..";

type ScannerScreenNavigatorProps = NativeStackScreenProps<
    RootStackParamList,
    RootScreens.SCANNER
>;

export const ScannerContainer = ({
    navigation,
}: ScannerScreenNavigatorProps) => {
    const onNavigate = (screen: RootScreens) => {
        navigation.navigate(screen);
    };

    return <Scanner onNavigate={onNavigate} />;
}

