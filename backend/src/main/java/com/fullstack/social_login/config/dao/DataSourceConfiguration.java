package com.fullstack.social_login.config.dao;

import com.mchange.v2.c3p0.ComboPooledDataSource;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.beans.PropertyVetoException;

@Configuration
@MapperScan("com.fullstack.social_login.dao")
public class DataSourceConfiguration {
    @Value("${jdbc.driver}")
    private String jdbcDriver;
    @Value("${jdbc.username}")
    private String jdbcUser;
    @Value("${jdbc.url}")
    private String jdbcUrl;
    @Value("${jdbc.password}")
    private String jdbcPassword;


    @Bean(name = "dataSource")
    public ComboPooledDataSource createDataSrouce() throws PropertyVetoException {
        ComboPooledDataSource dataSource = new ComboPooledDataSource();
        dataSource.setDriverClass(jdbcDriver);
        dataSource.setJdbcUrl(jdbcUrl);
        dataSource.setUser(jdbcUser);
        dataSource.setPassword(jdbcPassword);
        dataSource.setAutoCommitOnClose(false);

        return dataSource;
    }
}
