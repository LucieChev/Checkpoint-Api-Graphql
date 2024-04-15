import { Resolver, Query, Mutation, Arg } from "type-graphql";
import Country from "../entities/Country";

@Resolver()
export class CountryResolver {
  @Mutation(() => Country)
  async createCountry(
    @Arg("code") code: string,
    @Arg("name") name: string,
    @Arg("emoji") emoji: string,
    @Arg("continent") continent: string
  ): Promise<Country> {
    const country = Country.create({ code, name, emoji, continent });
    await country.save();
    return country;
  }

  @Query(() => [Country])
  async countries(): Promise<Country[]> {
    return await Country.find();
  }

  @Query(() => Country, { nullable: true })
  async countryByCode(@Arg("code") code: string): Promise<Country | undefined> {
    const country = await Country.findOne({ where: { code } });
    if (!country) {
      return undefined;
    }
    return country;
  }

  @Query(() => [Country])
  async countriesByContinent(
    @Arg("continent") continent: string
  ): Promise<Country[]> {
    return await Country.find({ where: { continent } });
  }
}
