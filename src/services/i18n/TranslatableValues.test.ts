import { SupportedLocale } from "../../constants/i18n";
import { TranslatableValues } from "./TranslatableValues";

describe('TranslatableValues', () => {
    describe('getLocalizedValue', () => {
        test('正常系', () => {
            const master = new TranslatableValues([
                ["ja", "日本語"],
                ["en", "English"],
            ]);
            expect(master.getLocalizedValue("ja")).toBe("日本語");
            expect(master.getLocalizedValue("en")).toBe("English");
        });
        // コンストラクタでロケール不足がエラーになるので、異常系はコード上はあるけど、発生しない
    });
    
    describe('createValues', () => {
        test('正常系', () => {
            expect(
                TranslatableValues.createValues([
                    ["ja", "日本語"],
                    ["en", "English"],
                ])
            ).toEqual(
                new Map<SupportedLocale,string>([
                    ["ja", "日本語"],
                    ["en", "English"],
                ])
            );
        });
        test('ロケール重複した場合はエラーにする', () => {
            expect(() => {
                TranslatableValues.createValues([
                    ["ja", "日本語"],
                    ["ja", "English"],
                ])
            }).toThrow();
        });
        test('ロケールが足りない場合はエラーにする', () => {
            expect(() => {
                TranslatableValues.createValues([
                    ["ja", "日本語"],
                ])
            }).toThrow();
        });
    });
});